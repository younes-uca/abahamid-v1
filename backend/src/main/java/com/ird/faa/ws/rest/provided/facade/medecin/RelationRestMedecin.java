package  com.ird.faa.ws.rest.provided.facade.medecin;

import com.ird.faa.service.medecin.facade.RelationMedecinService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ird.faa.bean.Relation;
import com.ird.faa.ws.rest.provided.converter.RelationConverter;
import com.ird.faa.ws.rest.provided.vo.RelationVo;

@Api("Manages relation services")
@RestController
@RequestMapping("api/medecin/relation")
public class RelationRestMedecin {

@Autowired
private RelationMedecinService relationService;

@Autowired
private RelationConverter relationConverter;


            @ApiOperation("Updates the specified  relation")
            @PutMapping("/")
            public  RelationVo update(@RequestBody  RelationVo  relationVo){
            Relation relation = relationConverter.toItem(relationVo);
            relation = relationService.update(relation);
            return relationConverter.toVo(relation);
            }

    @ApiOperation("Finds a list of all relations")
    @GetMapping("/")
    public List<RelationVo> findAll(){
        return relationConverter.toVo(relationService.findAll());
    }

    @ApiOperation("Finds a relation with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public RelationVo findByIdWithAssociatedList(@PathVariable Long id){
    return relationConverter.toVo(relationService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search relation by a specific criteria")
    @PostMapping("/search")
    public List<RelationVo> findByCriteria(@RequestBody RelationVo relationVo){
        return relationConverter.toVo(relationService.findByCriteria(relationVo));
        }

            @ApiOperation("Finds a relation by id")
            @GetMapping("/id/{id}")
            public RelationVo findById(@PathVariable Long id){
            return relationConverter.toVo(relationService.findById(id));
            }

            @ApiOperation("Saves the specified  relation")
            @PostMapping("/")
            public RelationVo save(@RequestBody RelationVo relationVo){
            Relation relation = relationConverter.toItem(relationVo);
            relation = relationService.save(relation);
            return relationConverter.toVo(relation);
            }

            @ApiOperation("Delete the specified relation")
            @DeleteMapping("/")
            public int delete(@RequestBody RelationVo relationVo){
            Relation relation = relationConverter.toItem(relationVo);
            return relationService.delete(relation);
            }

            @ApiOperation("Deletes a relation by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return relationService.deleteById(id);
            }


            }

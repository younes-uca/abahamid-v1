package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.TraitementAdminService;

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
import com.ird.faa.bean.Traitement;
import com.ird.faa.ws.rest.provided.converter.TraitementConverter;
import com.ird.faa.ws.rest.provided.vo.TraitementVo;

@Api("Manages traitement services")
@RestController
@RequestMapping("api/admin/traitement")
public class TraitementRestAdmin {

@Autowired
private TraitementAdminService traitementService;

@Autowired
private TraitementConverter traitementConverter;


            @ApiOperation("Updates the specified  traitement")
            @PutMapping("/")
            public  TraitementVo update(@RequestBody  TraitementVo  traitementVo){
            Traitement traitement = traitementConverter.toItem(traitementVo);
            traitement = traitementService.update(traitement);
            return traitementConverter.toVo(traitement);
            }

    @ApiOperation("Finds a list of all traitements")
    @GetMapping("/")
    public List<TraitementVo> findAll(){
        return traitementConverter.toVo(traitementService.findAll());
    }

    @ApiOperation("Finds a traitement with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public TraitementVo findByIdWithAssociatedList(@PathVariable Long id){
    return traitementConverter.toVo(traitementService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search traitement by a specific criteria")
    @PostMapping("/search")
    public List<TraitementVo> findByCriteria(@RequestBody TraitementVo traitementVo){
        return traitementConverter.toVo(traitementService.findByCriteria(traitementVo));
        }

            @ApiOperation("Finds a traitement by id")
            @GetMapping("/id/{id}")
            public TraitementVo findById(@PathVariable Long id){
            return traitementConverter.toVo(traitementService.findById(id));
            }

            @ApiOperation("Saves the specified  traitement")
            @PostMapping("/")
            public TraitementVo save(@RequestBody TraitementVo traitementVo){
            Traitement traitement = traitementConverter.toItem(traitementVo);
            traitement = traitementService.save(traitement);
            return traitementConverter.toVo(traitement);
            }

            @ApiOperation("Delete the specified traitement")
            @DeleteMapping("/")
            public int delete(@RequestBody TraitementVo traitementVo){
            Traitement traitement = traitementConverter.toItem(traitementVo);
            return traitementService.delete(traitement);
            }

            @ApiOperation("Deletes a traitement by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return traitementService.deleteById(id);
            }
        @ApiOperation("find by recueilDeDonnes id")
        @GetMapping("/recueilDeDonnes/id/{id}")
        public List<Traitement> findByRecueilDeDonnesId(@PathVariable Long id){
        return traitementService.findByRecueilDeDonnesId(id);
        }

        @ApiOperation("delete by recueilDeDonnes id")
        @DeleteMapping("/recueilDeDonnes/id/{id}")
        public int deleteByRecueilDeDonnesId(@PathVariable Long id){
        return traitementService.deleteByRecueilDeDonnesId(id);
        }



            }

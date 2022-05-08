package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.RecueilDeDonnesAdminService;

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
import com.ird.faa.bean.RecueilDeDonnes;
import com.ird.faa.ws.rest.provided.converter.RecueilDeDonnesConverter;
import com.ird.faa.ws.rest.provided.vo.RecueilDeDonnesVo;

@Api("Manages recueilDeDonnes services")
@RestController
@RequestMapping("api/admin/recueilDeDonnes")
public class RecueilDeDonnesRestAdmin {

@Autowired
private RecueilDeDonnesAdminService recueilDeDonnesService;

@Autowired
private RecueilDeDonnesConverter recueilDeDonnesConverter;


            @ApiOperation("Updates the specified  recueilDeDonnes")
            @PutMapping("/")
            public  RecueilDeDonnesVo update(@RequestBody  RecueilDeDonnesVo  recueilDeDonnesVo){
            RecueilDeDonnes recueilDeDonnes = recueilDeDonnesConverter.toItem(recueilDeDonnesVo);
            recueilDeDonnes = recueilDeDonnesService.update(recueilDeDonnes);
            return recueilDeDonnesConverter.toVo(recueilDeDonnes);
            }

    @ApiOperation("Finds a list of all recueilDeDonness")
    @GetMapping("/")
    public List<RecueilDeDonnesVo> findAll(){
        return recueilDeDonnesConverter.toVo(recueilDeDonnesService.findAll());
    }

    @ApiOperation("Finds a recueilDeDonnes with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public RecueilDeDonnesVo findByIdWithAssociatedList(@PathVariable Long id){
    return recueilDeDonnesConverter.toVo(recueilDeDonnesService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search recueilDeDonnes by a specific criteria")
    @PostMapping("/search")
    public List<RecueilDeDonnesVo> findByCriteria(@RequestBody RecueilDeDonnesVo recueilDeDonnesVo){
        return recueilDeDonnesConverter.toVo(recueilDeDonnesService.findByCriteria(recueilDeDonnesVo));
        }

            @ApiOperation("Finds a recueilDeDonnes by id")
            @GetMapping("/id/{id}")
            public RecueilDeDonnesVo findById(@PathVariable Long id){
            return recueilDeDonnesConverter.toVo(recueilDeDonnesService.findById(id));
            }

            @ApiOperation("Saves the specified  recueilDeDonnes")
            @PostMapping("/")
            public RecueilDeDonnesVo save(@RequestBody RecueilDeDonnesVo recueilDeDonnesVo){
            RecueilDeDonnes recueilDeDonnes = recueilDeDonnesConverter.toItem(recueilDeDonnesVo);
            recueilDeDonnes = recueilDeDonnesService.save(recueilDeDonnes);
            return recueilDeDonnesConverter.toVo(recueilDeDonnes);
            }

            @ApiOperation("Delete the specified recueilDeDonnes")
            @DeleteMapping("/")
            public int delete(@RequestBody RecueilDeDonnesVo recueilDeDonnesVo){
            RecueilDeDonnes recueilDeDonnes = recueilDeDonnesConverter.toItem(recueilDeDonnesVo);
            return recueilDeDonnesService.delete(recueilDeDonnes);
            }

            @ApiOperation("Deletes a recueilDeDonnes by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return recueilDeDonnesService.deleteById(id);
            }


            }

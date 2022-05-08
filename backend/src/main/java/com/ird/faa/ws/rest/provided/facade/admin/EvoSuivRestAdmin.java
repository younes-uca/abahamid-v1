package  com.ird.faa.ws.rest.provided.facade.admin;

import com.ird.faa.service.admin.facade.EvoSuivAdminService;

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
import com.ird.faa.bean.EvoSuiv;
import com.ird.faa.ws.rest.provided.converter.EvoSuivConverter;
import com.ird.faa.ws.rest.provided.vo.EvoSuivVo;

@Api("Manages evoSuiv services")
@RestController
@RequestMapping("api/admin/evoSuiv")
public class EvoSuivRestAdmin {

@Autowired
private EvoSuivAdminService evoSuivService;

@Autowired
private EvoSuivConverter evoSuivConverter;


            @ApiOperation("Updates the specified  evoSuiv")
            @PutMapping("/")
            public  EvoSuivVo update(@RequestBody  EvoSuivVo  evoSuivVo){
            EvoSuiv evoSuiv = evoSuivConverter.toItem(evoSuivVo);
            evoSuiv = evoSuivService.update(evoSuiv);
            return evoSuivConverter.toVo(evoSuiv);
            }

    @ApiOperation("Finds a list of all evoSuivs")
    @GetMapping("/")
    public List<EvoSuivVo> findAll(){
        return evoSuivConverter.toVo(evoSuivService.findAll());
    }

    @ApiOperation("Finds a evoSuiv with associated lists by id")
    @GetMapping("/detail/id/{id}")
    public EvoSuivVo findByIdWithAssociatedList(@PathVariable Long id){
    return evoSuivConverter.toVo(evoSuivService.findByIdWithAssociatedList(id));
    }

    @ApiOperation("Search evoSuiv by a specific criteria")
    @PostMapping("/search")
    public List<EvoSuivVo> findByCriteria(@RequestBody EvoSuivVo evoSuivVo){
        return evoSuivConverter.toVo(evoSuivService.findByCriteria(evoSuivVo));
        }

            @ApiOperation("Finds a evoSuiv by id")
            @GetMapping("/id/{id}")
            public EvoSuivVo findById(@PathVariable Long id){
            return evoSuivConverter.toVo(evoSuivService.findById(id));
            }

            @ApiOperation("Saves the specified  evoSuiv")
            @PostMapping("/")
            public EvoSuivVo save(@RequestBody EvoSuivVo evoSuivVo){
            EvoSuiv evoSuiv = evoSuivConverter.toItem(evoSuivVo);
            evoSuiv = evoSuivService.save(evoSuiv);
            return evoSuivConverter.toVo(evoSuiv);
            }

            @ApiOperation("Delete the specified evoSuiv")
            @DeleteMapping("/")
            public int delete(@RequestBody EvoSuivVo evoSuivVo){
            EvoSuiv evoSuiv = evoSuivConverter.toItem(evoSuivVo);
            return evoSuivService.delete(evoSuiv);
            }

            @ApiOperation("Deletes a evoSuiv by id")
            @DeleteMapping("/id/{id}")
            public int deleteById(@PathVariable Long id){
            return evoSuivService.deleteById(id);
            }
        @ApiOperation("find by dossierMedicale ref")
        @GetMapping("/dossierMedicale/ref/{ref}")
        public List<EvoSuiv> findByDossierMedicaleRef(@PathVariable String ref){
        return evoSuivService.findByDossierMedicaleRef(ref);
        }

        @ApiOperation("delete by dossierMedicale ref")
        @DeleteMapping("/dossierMedicale/ref/{ref}")
        public int deleteByDossierMedicaleRef(@PathVariable String ref){
        return evoSuivService.deleteByDossierMedicaleRef(ref);
        }

        @ApiOperation("find by dossierMedicale id")
        @GetMapping("/dossierMedicale/id/{id}")
        public List<EvoSuiv> findByDossierMedicaleId(@PathVariable Long id){
        return evoSuivService.findByDossierMedicaleId(id);
        }

        @ApiOperation("delete by dossierMedicale id")
        @DeleteMapping("/dossierMedicale/id/{id}")
        public int deleteByDossierMedicaleId(@PathVariable Long id){
        return evoSuivService.deleteByDossierMedicaleId(id);
        }



            }
